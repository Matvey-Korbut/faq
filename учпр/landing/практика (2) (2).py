from tkinter import *  
from tkinter import ttk
from tkinter import messagebox
  
window = Tk()  
window.title("Добро пожаловать на тест")  
window.geometry('600x450')
tab_control = ttk.Notebook(window) 
tab1 = ttk.Frame(tab_control)  
tab2 = ttk.Frame(tab_control)
tab3 = ttk.Frame(tab_control) 
tab4 = ttk.Frame(tab_control)
tab5 = ttk.Frame(tab_control)
tab_control.add(tab1, text="Первый вопрос")
tab_control.add(tab2, text='Второй вопрос')
tab_control.add(tab3, text="Третий вопрос")
tab_control.add(tab4, text="Четвёртый вопрос")
tab_control.add(tab5, text="Пятый вопрос")
def Solution():
   Right_decision= 0
   solution1 = str(lbl1_an.get())
   solution2 = str(lbl2_an.get())
   solution3 = str(lbl3_an.get())
   solution4 = str(lbl4_an.get())
   solution5 = str(lbl5_an.get())
   if solution1 == "окружность":
      Right_decision = Right_decision + 1
   if solution2 == "8":
      Right_decision = Right_decision + 1
   if solution3 == "шар":
      Right_decision = Right_decision + 1
   if solution4 == "180":
      Right_decision = Right_decision + 1
   if solution5 == "в параллельных":
      Right_decision = Right_decision + 1
   messagebox.showinfo('Количество правильных ответов', f'У вас правильных ответов: {Right_decision} из 5, ваша оценка: {Right_decision}')

lbl1 = Label(tab1, text="Линия пересечения двух сфер есть")   
lbl1.grid(row=3, column=1)
lbl2 = Label(tab2, text='Сколько вершин у куба?')  
lbl2.grid(row=4, column=1)
lbl3 = Label(tab3, text='Назовите фигуру являющуюся телом вращения')  
lbl3.grid(row=5, column=1)
lbl4 = Label(tab4, text='У четырехугольника, вписанного в окружность, сумма противоположных углов равна:')  
lbl4.grid(row=6, column=1)
lbl5 = Label(tab5, text='В каких плоскостях лежат основания призмы?')  
lbl5.grid(row=7, column=1)
tab_control.pack(expand=1, fill='both')
frame = Frame(
   window, 
   padx = 10, 
   pady = 10 
)
frame.pack(expand=True)
lbl1_an = Entry(
   frame,
)
lbl1_an.grid(row=3, column=1, pady=7)
lbl2_an = Entry(
   frame,
)
lbl2_an.grid(row=4, column=1, pady=7)

lbl3_an = Entry(
   frame, 
)
lbl3_an.grid(row=5, column=1, pady=7)

lbl4_an = Entry(
   frame, 
)
lbl4_an.grid(row=6, column=1, pady=7)

lbl5_an = Entry(
   frame, 
)
lbl5_an.grid(row=7, column=1, pady=7)
button = Button(
   frame, 
   text='Закончить', 
   command=Solution
)
button.grid(row=8, column=4)
window.mainloop()