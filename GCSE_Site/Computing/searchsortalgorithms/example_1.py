# for numbers only
import random
l = []
datapoints = int(input('How many peices of data do you have? : '))
lower = int(input('Lower bound : '))
upper = int(input('Upper bound : '))
for a in range(0,datapoints):
    l.append(random.randint(lower,upper))
i = 0
print('Before : ' + str(l))
while i < len(l):
    j = 0
    while j < i:
        if l[i] < l[j]:
            print('Switching ' + str(l[i]) + ' with ' + str(l[a]))
            temp = l[i]
            l[i] = l[j]
            l[j] = temp
        j += 1
    i += 1
print('After : ' + str(l))
input()
