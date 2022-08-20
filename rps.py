import random

def rps(you):
    assert you in ['rock','paper','siccors'],"your entrie wasn't an valid option."

    windict = {'rock' : 'siccors' , 'paper' : 'rock' , 'siccors' : 'paper'}
    losedict = {'rock' : 'paper' , 'paper' : 'siccors' , 'siccors' : 'rock'}

    if random.choice([True,False]):
        print('you win!')
        print(f'you: {you} | them: {windict[you]}')
    else:
        print('you lose')
        print(f'you: {you} | them: {losedict[you]}')



rps('siccors')
