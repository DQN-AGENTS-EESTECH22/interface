import numpy as np
import sys
from PIL import Image
#from skimage import color # util depois para transformar em hsv
from sklearn.cluster import KMeans, AgglomerativeClustering


def filter_pixels(pixels: np.ndarray, low = 0.0, high = 1.0) -> np.ndarray:
    pix_mean = pixels.mean(1)
    mask = (low <= pix_mean) & (pix_mean <= high)
    idx = np.arange(len(pixels))
    return pixels[idx[mask]]

def open_img(path):
    '''MUST BE A JPG/JPEG'''
    path = str(path)
    try:
        img = Image.open(path) # Open the image
        img = np.asarray(img)
        imgg = img.reshape((-1,3)).astype("float32") / 255 # Transform it into an array and normalize 0-255 -> 0-1
        return filter_pixels(imgg,low=0,high=0.99)
        
        
    except Exception as e:
        print(e)
    return img


def pallete(path, n_clusters=5):
    img = open_img(path)
    
    kmeans = KMeans(n_clusters)
    predictions = kmeans.fit_predict(img)
    centers = kmeans.cluster_centers_
    
    rgb = centers*  255
    rgb = rgb.astype(np.int64)
    
    dic = {}
    for i,x in enumerate(rgb):
        dic[str(i)] = x
    print(dic)
    return dic

if __name__ == "__main__":
    pallete(str(sys.argv[1]))