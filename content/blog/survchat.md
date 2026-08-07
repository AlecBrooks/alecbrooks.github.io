---
title: "🗪 SurvChat: An Overly Complicated Shared Drive Chat Program 🗪"
date: 2023-06-08
repo: AlecBrooks/SurvTalk
---
Welcome to SurvChat, an excessively convoluted shared drive chat program built using VBA and Excel. SurvChat is a programming project that I undertook just for fun, embracing complexity in a purposeless manner. This blog post will take you through the unique features of SurvChat, including its encryption function, installation process, and overall experience.

### The Encryption Function

SurvChat takes security to a whole new level with its client-side message encryption. The encryption function in VBA ensures that your messages remain secure and indecipherable to prying eyes. Here's a glimpse of the encryption function:

[![SurvChat Demo](/img/demos/SurvChat_Demo%20Crop.gif)](/img/demos/SurvChat_Demo%20Crop.gif)

```vbnet
Function Encrypt(crypt_in As String)
Dim c, f, i As Integer
For i = 1 To Len(crypt_in)
    c = Asc(Mid(crypt_in, i, 1))
    If c >= 97 And c <= 122 Then
        f = 97
    ElseIf c >= 65 And c <= 90 Then
        f = 65
    Else
        GoTo Build
    End If
    c = 13 + c - f
    Do
        c = c Mod 26
    Loop While c > (26 - 1)
    c = c + f
Build:
    ROT = ROT & Chr(c)
Next i
    crypt_in = ROT
End Function
```

#### Example of an Encrypted Conversation:

Here's a snippet of an encrypted conversation stored on the server:

```
Hfre1@QRFX - 03:16 CZ >  Uryyb Jbeyq!
Hfre2@QRFX - 03:16 CZ >  Url!
```

### Accessing the Project/Installation

To get started with SurvChat, you can download the client and server from my GitHub repository: [SurvTalk on GitHub](https://github.com/AlecBrooks/SurvTalk). The installation process involves storing the server folder on a shared network drive and the client folder locally.

1. Download the client and server folders from the GitHub repository.
2. Store the server folder on a shared network drive accessible to all users.
3. Place the client folder on your local machine.
4. Edit the Config File within the client folder to specify the location of the server folder.
5. Set the admin password by modifying the server.conf file. SurvChat offers various administration commands that can be executed by a user with admin privileges by inputting the command "/chmod [admin password]." These commands enable actions such as creating and deleting new channels, kicking users from the server, and more. To explore the available commands, simply type "/help" in the chat.

### Conclusion

SurvChat, the overly complicated shared drive chat program, presents a unique and ultimately purposeless approach to communication. With its VBA-powered Excel interface, encryption functions, and admin controls, SurvChat delivers a chat experience like no other. Whether you're seeking a bit of programming fun or simply enjoy embracing complexity, SurvChat is a project worth exploring.

To embark on your SurvChat journey, visit the GitHub repository and dive into the deep world of LAN chat goodness that SurvChat can offer. Experience the thrill of secure, convoluted conversations with your friends and colleagues. Happy SurvChatting!

Note: SurvChat is intended for recreational purposes only and should not be used for sensitive or confidential communication.
