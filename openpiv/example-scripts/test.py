import openpiv
from openpiv import tools, process, validation, filters, scaling, pyprocess
import numpy as np
import matplotlib.pyplot as plt

from progressbar import *
import openpiv.gpu_process 
reload(openpiv.gpu_process)

frame_a  = tools.imread( 'exp1_001_a.bmp' )
frame_b  = tools.imread( 'exp1_001_b.bmp' )

fig,ax = plt.subplots(1,2,figsize=(10,8))
ax[0].imshow(frame_a,cmap=plt.cm.gray)
ax[1].imshow(frame_b,cmap=plt.cm.gray)

# gpu code parametes
min_window_size = 32
overlap_ratio = 0.5
coarse_factor = 1
nb_iter_max = 2

# First time is slow as the GPU modules need to compile. Once they are compiled, they stay compiled.
#Every time you run this after the first time it will be fast.
x, y, u, v, mask = openpiv.gpu_process.WiDIM( frame_a.astype(np.int32), frame_b.astype(np.int32), np.ones(frame_a.shape, dtype=np.int32),
                                                     min_window_size, 
                                                     overlap_ratio,
                                                     coarse_factor,
                                                     dt,
                                                     nb_iter_max = nb_iter_max)

tools.save(x, y, u, v, np.zeros_like(u), 'exp1_001_gpu.txt' )                                                     