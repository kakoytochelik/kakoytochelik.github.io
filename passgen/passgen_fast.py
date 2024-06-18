# -*- coding:utf -8 -*-

import random
import pyperclip
import colorama
from termcolor import colored, cprint


colorama.init()

# file = open("keys.txt", "a")
chars = 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
# site = str(input('Название сервиса? Оставьте пустым, если название скопировано в буфер обмена' + '\n') or pyperclip.paste())
# print(colored('\n' + site, 'yellow'))
pass_len = int(18)
# pass_len = int(input('\nДлина пароля? По умолчанию: 20' + '\n') or '18')
# print(colored(pass_len, 'yellow'))
part_len = int(pass_len/6)

pass_part =''
part_list = []

for n in range(part_len):
    for i in range(0,6):
        pass_part += random.choice(chars)
    part_list.append(pass_part)
    pass_part = ''


password = '-'.join(part_list)
print('\n' + colored(password, 'green'))

# file.write(site + ' -------- ' + password + '\n\n')
# file.close()
pyperclip.copy(password)
print('\nПароль скопирован в буфер обмена')


# password = password + "-"
# range(length)
# +-/*!&$#?=@<>
