json.array!(@sitters) do |sitter|
  json.extract! sitter, :id, :email, :name
  json.url sitter_url(sitter, format: :json)
end
