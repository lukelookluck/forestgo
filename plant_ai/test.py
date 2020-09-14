import tensorflow as tf
import numpy as np

data = np.loadtxt("data-iris-1.csv", delimiter=",", dtype=np.float32)   # 75x5 matrix
# slicing data into x and y
x = data[:,0:-1]    # from 1st to (n-1)th column, when data has n columns
y = data[:,[-1]]    # nth column, when data han n columns
# print variable type
print(type(x))
# print variable shape
print("x is", x.shape, "and y is", y.shape)