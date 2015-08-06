class ContactSerializer < ActiveModel::Serializer
  attributes :name, :email, :pet_name, :poster_src

  def poster_src
    object.poster.url
  end
end
