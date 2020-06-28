# your code, here

lasers = {
  blaster: 200,
  helium_neon: 180,
  nuclear_pumped: 170,
  krypton: 170,
  co2: 160,
  coil: 150,
  strontium_vapor: 140,
  ruby: 130,
  xenon_ion: 120,
  free_electron: 110,
  gas_dynamic: 95,
  nitrogen: 0
}

ordered_lasers = lasers.sort_by{|type, distance| distance}

puts "How far away is the target?"
user_distance = gets.chomp.to_i

reccomended_laser = "#{ordered_lasers.first[0]}"
ordered_lasers.each do |laser, min_range|
  if min_range > user_distance
    return puts "Your best bet would be the #{reccomended_laser.to_s.gsub("_", " ")} laser."
  elsif user_distance >= 200
      return puts "Your best bet would be the #{ordered_lasers.last[0]} laser."
  else
    reccomended_laser = laser.to_s
  end
end
