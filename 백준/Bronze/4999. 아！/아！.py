import sys

input = sys.stdin.readline

jaehwan = input().rstrip()
doctor = input().rstrip()

if len(jaehwan) >= len(doctor):
    print('go')
else:
    print('no')
