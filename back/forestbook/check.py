from tensorflow.keras.models import load_model

import matplotlib.pyplot as plt
import numpy as np
import os
import PIL
import tensorflow as tf
import pathlib

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential


def flower_check(flower_path):

    PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
    flower_paths = flower_path.split('/')
    TEST_FILE = os.path.join(
        PROJECT_ROOT[:-10], flower_paths[1], flower_paths[2])
    modelFile = os.path.join(PROJECT_ROOT, 'mnist_mlp_model.h5')

    model = load_model(modelFile)
    print('PROJECT_ROOT--------------------------------------------------', PROJECT_ROOT)
    print(TEST_FILE)
    batch_size = 32
    img_height = 180
    img_width = 180

    class_names = ['강아지풀', '개나리', '국화', '나팔꽃', '데이지', '무궁화', '민들레', '벚꽃', '장미', '초롱꽃', '코스모스', '토끼풀', '튤립', '해바라기']

    img = keras.preprocessing.image.load_img(
        TEST_FILE, target_size=(img_height, img_width)
    )
    img_array = keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)  # Create a batch

    predictions = model.predict(img_array)
    score = tf.nn.softmax(predictions[0])

    predict_name = class_names[np.argmax(score)]
    predict_score = round((100 * np.max(score)), 2)

    print(predict_name)
    print(predict_score)

    return predict_name, predict_score
