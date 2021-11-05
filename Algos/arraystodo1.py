# Push Front
# Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

# def pushFront(val, arr):
#     newArr = []
#     newArr.append(val)
#     for i in arr:
#         newArr.append(i)
#     return newArr

# testArr = [8, 2, 5, 1, 6]
# print(pushFront('test', testArr))

# # Pop front
# # Given an array, remove and return the value at the beginning of the array. Do this without using any built -in array methods except pop().

# def popFront(arr):
#     newArr = []
#     for i in range(1,len(arr)):
#         newArr.append(arr[i])
#     return newArr

# print(popFront(testArr))

# # Insert At
# # Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val).

# def insertAt(val, index, arr):
#     newArr = []
#     for i in range(len(arr)):
#         if i == index - 1:
#             newArr.append(val)
#         newArr.append(arr[i])
#     return newArr


# testArr = [8, 2, 5, 1, 6]
# testVal = "test"
# testLoc = 3
# print(insertAt(testVal, testLoc, testArr))


# # Remove at
# # Given an array and an index into array, remove and return the array value at that index.Do this without using built -in array methods except pop().Think of popFront(arr) as equivalent to removeAt(arr, 0).

# def removeAt(index, arr):
#     newArr = []
#     for i in range(len(arr)):
#         if i == index -1:
#             continue
#         newArr.append(arr[i])
#     return newArr

# testArr = [8, 2, 5, 1, 6]
# testLoc = 1
# print(removeAt(testLoc, testArr))


# Swap Pairs(Bonus Challenge)
# Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1, 2, 3, 4], return [2, 1, 4, 3]. For example, change input["Brendan", true, 42] to [true, "Brendan", 42]. As with all array challenges, do this without using any built - in array methods.

# def swapPairs(arr):
#     if len(arr) % 2 != 0:
#         for i in range(len(arr)-2):
#             temp = arr[i]
#             arr[i] = arr[i+1]
#             arr[i+1] = temp
#     if len(arr) % 2 == 0:
#         for i in range(len(arr)-1):
#             temp = arr[i]
#             arr[i] = arr[i+1]
#             arr[i+1] = temp
#     return arr


# testArr = [8, 2, 5, 1, 6]
# testArr2 = [5, 8, 2, 3]
# print(swapPairs(testArr))
# print(swapPairs(testArr2))


# Remove Duplicates(Bonus Challenge)
# Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.As with all these array challenges, do this without using any built - in array methods.
# Second: Solve this without using any nested loops.

def deDup(arr):
    newArr = []
    for i in range(len(arr)-1):
        check = arr[i+1]
        if check == arr[i]:
            newArr.append(arr[i])
            continue
        else:
            newArr.append(arr[i])
    return newArr


testArr = ["a", "a", "b", "c", "d", "e", "e", "e", "f", "g", "h", "i", "j", "k", "k"]
print(deDup(testArr))
