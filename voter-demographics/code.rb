
data =[
{First_Name: "Jon", Last_Name: "Smith", Age: 25, Income: 50000, Household_Size: 1, Gender: "Male", Education: "College"},
{First_Name: "Jane", Last_Name: "Davies", Age: 30, Income: 60000, Household_Size: 3, Gender: "Female", Education: "High School"},
{First_Name: "Sam", Last_Name: "Farelly", Age: 32, Income: 80000, Household_Size: 2, Gender: "Unspecified", Education: "College"},
{First_Name: "Joan", Last_Name: "Favreau", Age: 35, Income: 65000, Household_Size: 4, Gender: "Female", Education: "College"},
{First_Name: "Sam", Last_Name: "McNulty", Age: 38, Income: 63000, Household_Size: 3, Gender: "Male", Education: "College"},
{First_Name: "Mark", Last_Name: "Minahan", Age: 48, Income: 78000, Household_Size: 5, Gender: "Male", Education: "High School"},
{First_Name: "Susan", Last_Name: "Umani", Age: 45, Income: 75000, Household_Size: 2, Gender: "Female", Education: "College"},
{First_Name: "Bill", Last_Name: "Perault", Age: 24, Income: 45000, Household_Size: 1, Gender: "Male", Education: "Did Not Complete High School"},
{First_Name: "Doug", Last_Name: "Stamper", Age: 45, Income: 75000, Household_Size: 1, Gender: "Male", Education: "College"},
{First_Name: "Francis", Last_Name: "Underwood", Age: 52, Income: 100000, Household_Size: 2, Gender: "Male", Education: "College"}
]

# Average age
total_age = 0
data.each { |person| total_age += person[:Age] }
avg_age = (total_age * 1.0)/data.length
puts "Average Age: #{avg_age}"

# Average income
income_sum = 0
data.each { |person| income_sum += person[:Income] }
avg_income = (income_sum * 1.0)/data.length
puts "Average Income: #{avg_income}"

# Average household size
household_sum = 0
data.each { |person| household_sum += person[:Household_Size] }
avg_size = (household_sum * 1.0)/data.length
puts "Average Household Size: #{avg_size}"

# Female Percentage
female_count = 0
data.each { |person| female_count += 1 if person[:Gender] == "Female" }
puts "Female %: #{((female_count * 1.0)/data.length) * 100}"
# Male Percentage
male_count = 0
data.each { |person| male_count += 1 if person[:Gender] == "Male" }
puts "Male %: #{((male_count * 1.0)/data.length) * 100}"
# Unspecified Gender Percentage
unspecified_count = 0
data.each { |person| unspecified_count += 1 if person[:Gender] == "Unspecified" }
puts "Unspecified %: #{((unspecified_count * 1.0)/data.length) * 100}"
# Percent of those who obtained a college education level
college_count = 0
data.each { |person| college_count += 1 if person[:Education] == "College" }
puts "College %: #{((college_count * 1.0)/data.length) * 100}"
# Percent of those who obtained a high school education level
high_school_count = 0
data.each { |person| high_school_count += 1 if person[:Education] == "High School" }
puts "High School %: #{((high_school_count * 1.0)/data.length) * 100}"
# Percent of those that did not finish high school
drop_out_count = 0
data.each { |person| drop_out_count += 1 if person[:Education] == "Did Not Complete High School" }
puts "Did Not Finish High School %: #{((drop_out_count * 1.0)/data.length) * 100}"
