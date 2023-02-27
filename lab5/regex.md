1import re

pattern = r'a[b]*'
text = 'abb abbb abbbb abc'
matches = re.findall(pattern, text)

print(matches) # Output: ['abb', 'abbb', 'abbbb', 'a']


2import re

pattern = r'a[b]{2,3}'
text = 'abb abbb abbbb abc'
matches = re.findall(pattern, text)

print(matches) # Output: ['abbb']

3import re

pattern = r'[a-z]+_[a-z]+'
text = 'hello_world abc_defg pqr_stu_vwx'
matches = re.findall(pattern, text)

print(matches) # Output: ['hello_world', 'abc_defg', 'pqr_stu_vwx']



4import re

pattern = r'[A-Z][a-z]+'
text = 'Hello world, How Are You?'
matches = re.findall(pattern, text)

print(matches) # Output: ['Hello', 'How', 'Are', 'You']


5import re

pattern = r'a.*b$'
text = 'abc abd aeb abef'
matches = re.findall(pattern, text)

print(matches) # Output: ['abc', 'abd']


6import re

pattern = r'[ ,.]'
text = 'hello, world. how are you?'
replaced_text = re.sub(pattern, ':', text)

print(replaced_text) # Output: 'hello:world:how:are:you?'



7import re

def snake_to_camel(text):
    pattern = r'(_\w)'
    camel_text = re.sub(pattern, lambda x: x.group(1)[1:].upper(), text)
    return camel_text

text = 'hello_world_how_are_you'
camel_text = snake_to_camel(text)

print(camel_text) # Output: 'helloWorldHowAreYou'


8import re

pattern = r'[A-Z][a-z]*'
text = 'HelloWorld,HowAreYou?'
matches = re.findall(pattern, text)

print(matches) # Output: ['Hello', 'World', 'How', 'Are', 'You']

9import re

pattern = r'(?<!^)(?=[A-Z])'
text = 'HelloWorld,HowAreYou?'
replaced_text = re.sub(pattern, ' ', text)

print(replaced_text) # Output: 'Hello World, How Are You?'



10import re

def camel_to_snake(text):
    pattern = r'(?<!^)(?=[A-Z])'
    snake_text = re.sub(pattern, '_', text).lower()
    return snake_text

text = 'helloWorldHowAreYou'
snake_text = camel_to_snake(text)

print(snake_text) # Output: 'hello_world_how_are_you'

