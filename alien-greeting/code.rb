def greet(name, lang = nil)
  if lang == "Spanish"
    greeting = "Hola"
  elsif lang == "Italian"
    greeting = "Ciao"
  elsif lang == "Irken"
    greeting = "DOOM de doom"
  else
    greeting = "Hi"
  end
  puts "#{greeting} #{name.capitalize}!"
end


p greet("STEPHEN", "Irken")
