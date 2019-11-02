import pandas as pd
df =pd.read_excel('meituan_meishi.xlsx')
cata=[]
zong=[]
dd={}
        
for i in range(500):
  data=df.ix[i].values
  cata.append(data)
  #print("{0}".format(cata[i]))

for i in range(500):
    a=cata[i][3]
    b=cata[i][4]
    c=cata[i][5]
    address=cata[i][7]
    if a<30:
        a=100-0.01*a
    elif a<60:
        a=80-0.01*a
    elif a<100:
        a=60-0.01*a
    elif a<200:
        a=40-0.01*a
    else :
        20-0.01*a

    if b<100:
        b=10+0.01*b
    elif b<300:
        b=20+0.01*b
    elif b<600:
        b=30+0.01*b
    elif b<1000:
        b=40+0.01*b
    elif b<3000:
        b=50+0.001*b
    elif b<6000:
        b=60+0.001*b
    elif b<10000:
        b=70+0.001*b
    elif b<20000:
        b=80+0.0001*b
    else :
        b=90+0.00001*b
        
    c=c*20
    if address.find(u"鼓楼",1) !=-1:
        d=100
    elif address.find(u"仓山",1) !=-1:
        d=80
    elif address.find(u"晋安",1) !=-1:
        d=60
    elif address.find(u"台江",1) !=-1:
        d=40
    elif address.find(u"闽侯",1) !=-1:
        d=30
    elif address.find(u"马尾",1) !=-1:
        d=20
    else: d=10
    #print(a,b,c,d)
    a=a+b+c+d
    zong.append(a)
    dd[a]=cata[i]
zong.sort(reverse=True)
for i in range(50):
    print("{0}".format(dd[zong[i]]))

