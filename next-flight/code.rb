flights = {
"Flight_1" => 2,
"Flight_2" => 5,
"Flight_3" => 7.5,
"Flight_4" => 8.5,
"Flight_5" => 9,
"Flight_6" => 10,
"Flight_7" => 11.5,
"Flight_8" => 13.5,
"Flight_9" => 14.5,
"Flight_10" => 17,
"Flight_11" => 18,
"Flight_12" => 19,
"Flight_13" => 24
}

puts "What is the earliest time you can leave by?"
print ">"
time = gets.chomp

while time.to_f == 0 || time.to_f > 24
  puts "Please pick a valid number from 0.01 to 24."
  time = gets.chomp
end

flights.each do |flight_num, flight_time|
  if time.to_f > 19.0
    return puts "You should get on Flight_13 leaving at 24.

    ***DON'T STOP...BELIEVIN'!***

    Just a small town girl
    Living in a lonely world
    She took the midnight train going anywhere
    Just a city boy
    Born and raised in South Detroit
    He took the midnight train going anywhere

    A singer in a smoky room
    A smell of wine and cheap perfume
    For a smile they can share the night
    It goes on and on and on and on

    Strangers waiting, up and down the boulevard
    Their shadows searching in the night
    Streetlights people, living just to find emotion
    Hiding, somewhere in the night."
  elsif time.to_f == flight_time
    return puts "Perfect! #{flight_num} is right at #{flight_time}!"
  elsif flight_time > time.to_f
    return puts "You should get on #{flight_num} at #{flight_time}"
  end
end
