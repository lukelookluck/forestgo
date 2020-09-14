import tensorflow as tf


# Req. 1-2 선형 모델 클래스 구현
# tf.keras.Model 상속
class LinearModel(tf.keras.Model):
	def __init__(self, num_units):
		super(LinearModel, self).__init__()
		self.units = num_units
		self.model = tf.keras.layers.Dense(units=self.units) 

	# 입력 값에 대한 결과 값을 리턴
	def call(self,x):
		y = self.model(x)
		return y