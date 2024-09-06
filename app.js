
//   Hometask
  const participantsList = document.querySelector('ul');
    const participants = [
       "Andrey Sitnik", "Charlie Gerard", "Alex Blom", "Emma Brillhart", 
       "Luis Montes", "Dylan Schiemann", "Christian Heilmann", "Jyoti Bishnoi",
       "Paul Shannon", "Liz Parody", "Daniel Khan", "April Wensel", "Yan Cui", 
       "Marcus Blankenship", "Tony Edwards", "Emma Wedekind", "Nader Dabit", 
       "Callum Macrae", "Kye Hohenberger", "Evan You", "Sarah Dresner", 
       "Natalia Tepluhina", "Adam Johnson", "Zhang Weili", "Tim Cook"
   ];

   
   function displayParticipants() {
       participantsList.innerHTML = ""; 
       participants.forEach(function(participant) {
           const li = document.createElement("li");
           li.textContent = participant;
           participantsList.appendChild(li);
       });
   }

   
   function addStudent(name) {
       if (name) {
           participants.push(name);
           displayParticipants(); 
       } else {
           console.log("Invalid name.");
       }
   }

  
   displayParticipants();

   
   addStudent("Yusif Qurbanov");
   addStudent("Valeh Huseynov");
   addStudent("Eli Memmedov");




