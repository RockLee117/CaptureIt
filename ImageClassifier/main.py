import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt

data = keras.datasets.cifar100

(training_images, training_labels), (testing_images, testing_labels) = data.load_data()

# Note that training_labels is a 2D array that is either 0-99
# [[19]
#  [29]
#  [ 0]
#  ...
#  [ 3]
#  [ 7]
#  [73]]

# cups = 28, plates = 61, chair = 20, table = 84 (number refers to index in the classes array)
classes = [
    'apple',  'aquarium_fish', 'baby', 'bear', 'beaver',
    'bed', 'bee', 'beetle', 'bicycle', 'bottle',
    'bowl', 'boy', 'bridge', 'bus', 'butterfly', 
    'camel', 'can', 'castle', 'caterpillar', 'cattle',
     'chair', 'chimpanzee', 'clock', 'cloud', 'cockroach',
     'couch', 'crab', 'crocodile', 'cup', 'dinosaur',
    'dolphin', 'elephant', 'flatfish', 'forest', 'fox',
    'girl', 'hamster', 'house', 'kangaroo','keyboard',
    'lamp', 'lawn_mower', 'leopard', 'lion', 'lizard',
    'lobster', 'man', 'maple_tree', 'motorcycle', 'mountain',
     'mouse', 'mushroom', 'oak_tree', 'orange', 'orchid',
     'otter', 'palm_tree', 'pear', 'pickup_truck', 'pine_tree',
     'plain', 'plate','poppy', 'porcupine', 'possum', 'rabbit', 'raccoon',
     'ray', 'road', 'rocket', 'rose', 'sea',
     'seal', 'shark', 'shrew', 'skunk', 'skyscraper',
     'snail', 'snake', 'spider', 'squirrel', 'streetcar',
     'sunflower', 'sweet_pepper', 'table', 'tank', 'telephone',
     'television', 'tiger', 'tractor', 'train', 'trout',
      'tulip', 'turtle', 'wardrobe', 'whale', 'willow_tree',
    'wolf','woman','worm'
]

for i in range(16):
    plt.subplot(4, 4, i + 1)
    plt.xticks([])
    plt.yticks([])
    plt.imshow(training_images[i], cmap=plt.cm.binary)
    plt.xlabel(classes[training_labels[i][0]])

plt.show()


print(len(classes))