class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :title
      t.text :body
      t.string :name
      t.string :email
      t.string :phone
      t.string :status

      t.timestamps
    end
  end
end
