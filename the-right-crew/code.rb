REQUIRED_CREW_SIZE = 6

available_crew = [
  :captain,
  :first_mate,
  :second_mate,
  :navigator,
  :first_engineer,
  :info_systems_tech,
  :environmental_control_tech,
  :lead_maintenance,
  :first_medical,
  :first_food_ops,
  :combat_systems_officer
]

possible_crew_selections = available_crew.sample(REQUIRED_CREW_SIZE)

# YOUR CODE GOES BELOW

puts "***Automated Flight Crew Advice:***"
possible_crew_selections.each do |crew_member|
  puts "Bring your #{crew_member.to_s.gsub("_", " ")}!"
end
puts ""
important_crew = [:captain, :navigator, :lead_maintenance]
important_crew.each do |position|
  if !possible_crew_selections.include?(position)
    puts "WARNING! You will be without the #{position.to_s.gsub("_", " ")}!"
  end
end
