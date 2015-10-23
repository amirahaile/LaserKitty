require 'rails_helper'

RSpec.describe User, type: :model do
  describe "class methods" do
    describe "#create_from_omniauth(auth_hash)" do
      let(:auth_hash) {
        {
          "provider" => "github",
          "uid" => "93824844",
          "info" => {
            "email" => "jane@thevirgin.com",
            "nickname" => "The Virgin",
            "first_name" => "Jane",
            "last_name" => "Villanueva"
          }
        }
      }
      let(:new_user) { User.create_from_omniauth(auth_hash) }

      it "creates a new instance of User" do
        expect(new_user).to be_an_instance_of User
        expect(new_user.id).to eq 1
      end

      it "isn't associated with any Identity objects" do
        expect(new_user.identities).to eq []
      end
    end
  end
end
