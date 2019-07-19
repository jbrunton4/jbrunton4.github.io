"""
Filename: new_project.py
Author: Brunt
Date: 30/06/2019
Description: Create new projects. Ensure this is saved in root
    of projects folder
"""

def main():
    import os
    from getpass import getuser
    import datetime as dt
    
    # create the project file and change to that directory
    fName = input("New project name : ")
    fName = "_".join( fName.split() )
    try:
        os.mkdir(fName)
    except FileExistsError as e:
        print(f"Could not create project because name already exists \n({e})")
        input()
        return 0
    os.chdir("./"+fName)

    # create the main file
    fh = open("main.py","w")

    # write a comment at the beginning
    comment = f"\"\"\"\n"
    comment += f"File name: {fName}\main.py\n"
    comment += f"Author: {getuser()}\n"
    comment += f"Date: {dt.datetime.now().day}/{dt.datetime.now().month}/{dt.datetime.now().year}\n"
    description = input("Description : ")
    comment += f"Description: {description}\n\"\"\"\n\n"
    fh.write(comment)

    # import modules to the file
    newModule = False
    print()
    while not newModule == "":
        newModule = input("New module (leave blank when done) : ")
        if not newModule == "":
            fh.write("import " + newModule + "\n")

    # write basic code to the file
    fh.write("\ndef main():\n    return 0\n\nif __name__ == \"__main__\":\n    try:\n       main()\n    except Exception as e:\n        print(f\"Error: {e}\")")

    # (optional) get a readMe
    readMe = False
    while not readMe:
        readMe = input("\nAdd a readMe? (y/n) : ")
        readMe.lower()
        if not readMe in ["y","n"]:
            readMe = False
            print("Please choose (y/n)")
    if readMe == "y":
        fh.close()
        fh = open("readMe.txt", "w")
        readMeTxt = input("Text to go in readMe file : ")
        fh.write(readMeTxt)

    # show success
    print("\nSucessfully made project!")

    # end this program
    fh.close()
    input()
    return 0

if __name__ == "__main__":
    main()
