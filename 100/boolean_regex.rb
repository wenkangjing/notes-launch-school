def has_b(string)
  if string =~ /b/
    p "yes"
  else
    p "no"
  end
end

has_b("sdfwesab")
has_b("dddds")
has_b("bb")
has_b("wer3fgb e3t")
has_b("      ")

def has_b?(string)
  if /b/.match(string)
    return true
  else
    return false
  end
end

p has_b?("sdfwesab")
p has_b?("dddds")
p has_b?("bb")
p has_b?("wer3fgb e3t")
p has_b?("      ")