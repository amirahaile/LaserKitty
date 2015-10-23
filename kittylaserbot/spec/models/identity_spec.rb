require 'rails_helper'

RSpec.describe Identity, type: :model do
  describe "class methods" do
    before :each do
      @user = create(:user)
      @identity = create(:identity)
      create(:identity, uid: "3820485")
    end

    describe "#find_with_omniauth(auth_hash)" do
      let(:auth_hash) { { "provider" => "github", "uid" => "9384792" } }
      let(:found_identity) { Identity.find_with_omniauth(auth_hash) }

      it "finds the correct identity" do
        expect(found_identity).to eq @identity
      end

      it "retrieves an Identity object" do
        expect(found_identity).to be_an_instance_of Identity
      end

      it "is associated to a User object" do
        expect(found_identity.user).to eq @user
      end
    end

    describe "#create_with_omniauth(auth_hash)" do
      let(:auth_hash) { { "provider" => "twitter", "uid" => "2984739" } }
      let(:new_identity) { Identity.create_with_omniauth(auth_hash) }

      it "creates a new instance of Identity" do
        expect(new_identity).to be_an_instance_of Identity
        expect(new_identity.id).to eq 3
        expect(new_identity.provider).to eq "twitter"
        expect(new_identity.uid).to eq "2984739"
      end

      it "isn't asscoiated to a User object" do
        expect(new_identity.user).to be nil
      end
    end
  end
end
