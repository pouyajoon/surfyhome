class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :telephone
      t.string :title
      t.text :comments
      t.timestamps
    end
  end
end
