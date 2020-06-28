def rectangle_perim(w, h = nil)
  if h.nil?
    4 * w
  else
    2 * w + 2 * h
  end
end
