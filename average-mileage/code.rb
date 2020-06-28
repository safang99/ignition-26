shuvver_ship_mileage = [260, 483, 792, 357, 546] #for an average of 487.6
zhook_cruiser_mileage = [186, 223, 173, 297, 303] #for an average of 236.4
nanoship_mileage = [646, 883, 761, 932, 778] #avg of 800

def average(mileage)
  mileage.sum / (mileage.length * 1.0)
end

def mileage_rating(avg)
  if avg >= 1000
    rating = "A"
  elsif avg >= 750
    rating = "B"
  elsif avg >= 500
    rating = "C"
  elsif avg >= 250
    rating = "D"
  else
    rating = "F - Use this ship as a last resort! We aren't made of money!"
  end
  "This ship gets a #{rating}"
end

ships = ["Nanoship", "Shuvver", "Snacky Cabs", "Resisty's Ship", "Zhook Cruiser"]

def rankings(list)
  list.each_with_index { |ship, i| puts "#{i + 1}. #{ship}" }
end
