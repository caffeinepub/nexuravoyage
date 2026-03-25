import List "mo:core/List";
import Principal "mo:core/Principal";

actor {
  type Message = {
    name : Text;
    email : Text;
    message : Text;
  };

  let messages = List.empty<Message>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let entry : Message = {
      name;
      email;
      message;
    };
    messages.add(entry);
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.toArray();
  };
};
