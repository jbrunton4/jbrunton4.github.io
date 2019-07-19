"""
File name: basic_new_project\main.py
Author: brunt
Date: 2/7/2019
Description: Creates a simple new project. Please do not change this code.
"""

import os
from getpass import getuser
import datetime as dt
import tkinter as tk

def main():

    # make GUI Class
    class Application(tk.Frame):
        # initialization function
        def __init__(self, master=None):
            super().__init__(master)
            self.master = master
            self.grid()
            self.create_widgets()

        # create objects
        def create_widgets(self):
            # change the title
            self.winfo_toplevel().title("New project")

            # make objects & give them properties
            self.project_name_label = tk.Label(self,width=15)
            self.project_name_label.grid(row=1,column=1)
            self.project_name_label["text"] = "Project name :"

            self.project_name_entry = tk.Entry(self,width=20)
            self.project_name_entry.grid(row=1,column=2)
            self.project_name_entry.bind("<Key-Return>", lambda event: self.create_project())

            self.x_btn_1 = tk.Button(self)
            self.x_btn_1.grid(row=1,column=3)
            self.x_btn_1["text"] = "X"
            self.x_btn_1["command"] = self.clear_project_name_entry
            self.x_btn_1.config(fg="red")

            self.file_name_label = tk.Label(self,width=15)
            self.file_name_label.grid(row=2,column=1)
            self.file_name_label["text"] = "Main file name : "

            self.file_name_entry = tk.Entry(self,width=20)
            self.file_name_entry.grid(row=2,column=2)
            self.file_name_entry.bind("<Key-Return>", lambda event: self.create_project())

            self.x_btn_2 = tk.Button(self)
            self.x_btn_2.grid(row=2, column=3)
            self.x_btn_2["text"] = "X"
            self.x_btn_2["command"] = self.clear_file_name_entry
            self.x_btn_2.config(fg="red")

            self.create_btn = tk.Button(self,width=20)
            self.create_btn.grid(row=3,column=2)
            self.create_btn["command"] = self.create_project
            self.create_btn.config(fg="green")
            self.create_btn["text"] = "Create"

            self.cancel_btn = tk.Button(self,width=15)
            self.cancel_btn.grid(row=3, column=1)
            self.cancel_btn["command"] = self.master.destroy
            self.cancel_btn.config(fg="Red")
            self.cancel_btn["text"] = "Cancel"

        # functions for clearing entries
        def clear_project_name_entry(self):
            self.project_name_entry.delete(first=0, last=100)

        def clear_file_name_entry(self):
            self.file_name_entry.delete(first=0, last=100)

        # function for creating the project itself
        def create_project(self):
            project_name = self.project_name_entry.get()
            project_name.lower()
            project_name = "_".join(project_name.split())
            fName = self.file_name_entry.get()
            fName.lower()
            fName = "_".join(fName.split())
            try:
                os.mkdir(project_name)
            except FileExistsError:
                print("Sorry, this file already exists.")
                input()
                return 0
            os.chdir("./"+project_name)
            fh = open(fName+".py","w")
            comment = "\"\"\"\n"
            comment += f"File name: {project_name}/{fName}.py\n"
            comment += f"Author: {getuser()}\n"
            comment += f"Date: {dt.datetime.now().day}/{dt.datetime.now().month}/{dt.datetime.now().year}\n"
            comment += "\"\"\"\n\n#Write your code here..."
            fh.write(comment)
            fh.close()
            self.master.destroy()

    # mainloop
    root = tk.Tk()
    app = Application(master=root)
    app.mainloop()

    return 0

if __name__ == "__main__":
    try:
       main()
    except Exception as e:
        print(f"Error: {e}")
