from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from numpy import unique
from numpy import argmax
from sklearn.metrics import accuracy_score

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder


# encode strings to integer
y = LabelEncoder().fit_transform(y)
total_class = len(unique(y))


model = Sequential()
model.add(Dense(20, input_dim=n_features, activation='relu', kernel_initializer='he_normal'))
model.add(Dense(10, activation='relu', kernel_initializer='he_normal'))
model.add(Dense(total_class, activation='softmax'))


# compiling the keras model
model.compile(loss='sparse_categorical_crossentropy', optimizer='adam')

# pridicting the output
yhat = model.predict(X_test)
yhat = argmax(yhat, axis=-1).astype('int')
acc = accuracy_score(y_test, yhat)
print('Accuracy: %.3f' % acc)

