import sys
import os

from openpiv import tools, process, validation, filters, scaling, pyprocess 

import numpy as np
import matplotlib.pyplot as plt

def two_images():

    local_dir = os.path.dirname(os.path.realpath(__file__))
    frame_a  = tools.imread( local_dir + '/exp1_001_a.bmp' )
    frame_b  = tools.imread( local_dir + '/exp1_001_b.bmp' )

    fig,ax = plt.subplots(1,2,figsize=(10,8))
    ax[0].imshow(frame_a,cmap=plt.cm.gray)
    ax[1].imshow(frame_b,cmap=plt.cm.gray)

    winsize = 32 # pixels
    searchsize = 64  # pixels, search in image B
    overlap = 12 # pixels
    dt = 0.02 # sec

    u, v, sig2noise = pyprocess.extended_search_area_piv( frame_a.astype(np.int32), frame_b.astype(np.int32), 
                                                        window_size=winsize, overlap=overlap, dt=dt, 
                                                        search_area_size=searchsize, sig2noise_method='peak2peak' )

    x, y = pyprocess.get_coordinates( image_size=frame_a.shape, window_size=searchsize, overlap=overlap )

    file_name = 'result.txt'
    # tools.save(x, y, u, v, np.zeros_like(u), 'exp1_001.txt' ) # no masking, all values are valid
    tools.save(x, y, u, v, np.zeros_like(u), file_name ) # no masking, all values are valid

    with open(file_name, 'r') as result_file:
        data=result_file.read().replace('\n', '').replace('\t', '   ')

    return data
