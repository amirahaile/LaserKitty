class Bot
  def self.instantiate
    status = $redis.exists("status") == 1 ? true : false
    controller = $redis.exists("status") == 1 ? true : false

    unless status && controller
      $redis.set("status", "off")
      $redis.set("controller", "pi")
    end
  end

  # getters
  def self.status
    $redis.get("status")
  end

  def self.controller
    $redis.get("controller")
  end

  # setters
  def self.status=(state)
    $redis.set("status", state)
  end

  def self.controller=(controller)
    $redis.set("controller", controller)
  end
end
