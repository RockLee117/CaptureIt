# https://machinelearningmastery.com/use-pre-trained-vgg-model-classify-objects-photographs/

from keras.applications.vgg16 import VGG16
import tensorflow as tf
from keras.applications.vgg16 import preprocess_input
from keras.applications.vgg16 import decode_predictions

#function takes paramater of picture taken by phone's camera then predicts the image's classification and returns a string being the classification 

#objects to take picture of that will be classified:
    #"ballpoint" -> image of a pen
    #"studio_couch" -> image of a couch/sofa
    #"backpack" -> image of a backpack
    
def imageClassifier(picFromCamera):
    model = VGG16()

    image = tf.keras.preprocessing.image.load_img(picFromCamera, target_size=(224, 224))

    # convert the image pixels to a numpy array
    image = tf.keras.preprocessing.image.img_to_array(image)

    # reshape data for the model
    image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))

    # prepare the image for the VGG model
    image = preprocess_input(image)

    # predict the probability across all output classes
    yhat = model.predict(image)

    # convert the probabilities to class labels
    label = decode_predictions(yhat)
    # retrieve the most likely result, e.g. highest probability
    label = label[0][0]

    # print the classification
    #label[1] is the NAME of the image prediction
    #label[2] is the percentage of how sure the prediction is
    # print('%s (%.2f%%)' % (label[1], label[2]*100)) 

    return label[1]

