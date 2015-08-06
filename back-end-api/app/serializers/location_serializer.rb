class PersonSerializer < ActiveModel::Serializer
  attributes :id, :number, :street, :city
end
