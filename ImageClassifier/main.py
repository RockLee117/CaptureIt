import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf
from keras import layers, models
from tensorflow import keras

data = keras.datasets.cifar100

#Citation for cifar100 dataset:
# @TECHREPORT{Krizhevsky09learningmultiple,
#     author = {Alex Krizhevsky},
#     title = {Learning multiple layers of features from tiny images},
#     institution = {},
#     year = {2009}
# }

(training_images, training_labels), (testing_images, testing_labels) = data.load_data()

# Note that training_labels is a 2D array that is either 0-99
# [[19]
#  [29]
#  [ 0]
#  ...
#  [ 3]
#  [ 7]
#  [73]]

#normalize data to make RGB values between 0 and 1
training_images = training_images / 255
testing_images = testing_images / 255

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



# Model- Convulutional Neural Network 
model = models.Sequential([
    layers.Conv2D(filters=32, kernel_size=(2, 2), padding='same', strides=(2,2), input_shape=(32, 32, 3)),
    layers.MaxPooling2D(pool_size=(2, 2), strides=(1,1), padding='same'),
    
    layers.Conv2D(filters=64, kernel_size=(2, 2), padding='same', strides=(2,2)),
    layers.MaxPooling2D(pool_size=(2, 2), strides=(1,1), padding='same'),
    
    layers.Flatten(),
    layers.Dense(900, activation='relu'),
    layers.Dense(600, activation='relu'),
    layers.Dense(100, activation='softmax') #is 100 b/c there are 100 labels/classes for the images
])
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
model.fit(training_images, training_labels, epochs=5)

test_loss, test_acc = model.evaluate(testing_images, testing_labels)
print("test accuracy: ", test_acc)

prediction = model.predict(testing_images)

for i in range(5):
    plt.grid(False)
    plt.xticks([])
    plt.yticks([])
    plt.imshow(testing_images[i], cmap=plt.cm.binary)
    plt.xlabel("Actual: " + classes[testing_labels[i][0]])
    plt.title("Prediction: " + classes[np.argmax(prediction[i])])
    plt.show()
