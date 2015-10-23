FactoryGirl.define do
  factory :user do
    first_name "Claudio"
    last_name "Sanchez"
    email "claudio@coheed.com"
    password_digest "shabutie"
    relation "friend"
    username "armorywars"
    invite_status "pending"
    status_msg ""
  end

  factory :identity do
    uid "9384792"
    provider "github"
    user_id 1
  end
end
