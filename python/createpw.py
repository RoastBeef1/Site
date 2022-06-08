import random, string

def randomword():
   letters = string.ascii_lowercase
   return ''.join(random.choice(letters) for i in range(18))