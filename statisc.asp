<%@ Language=VBScript%>
<%
Set conn = Server.CreateObject ("ADODB.connection")
conn.Open "DRIVER={Microsoft Access Driver (*.mdb)}; "  & _
"DBQ=" & Server.MapPath("db/webtran1.mdb")

Set rs = Server.CreateObject ("ADODB.Recordset")

sql="SELECT COUNT(ip) as cou FROM cc "
rs.Open sql,conn
cou=rs("cou")
rs.Close 

sql="SELECT SUM(visits) as Total_visits FROM cc WHERE visits>0 "'and  dat < #"&date()+1&"#"
rs.Open sql,conn
Total_visits=rs("Total_visits")
rs.Close 

sql="SELECT SUM(clickc) as Total_click FROM cc WHERE clickc>0"' and  dat < #"&date()+1&"#"
rs.Open sql,conn
Total_click=rs("Total_click")
rs.Close 


sql="select * from cc"
rs.Open sql,conn
%>
<HTML>
<HEAD>
<META NAME="GENERATOR" Content="Microsoft Visual Studio 6.0">
</HEAD>
<BODY>
<center>
<a href="http://m.maploco.com/details/e4048v6c">
  <img style="border:0px;" src="http://www.maploco.com/vmap/7132116.png" 
           alt="Locations of Site Visitors" title="Locations of Site Visitors"/>
</a>
<div style="overflow-x:auto;">
<table id="myTable">
<th style="background-color: #4CAF50; color: white; border: 1px solid black; text-align:center; padding:15px">IP address</th>
<%da=rs("dat")%>
<%do until rs.EOF %>
<%
if not da=rs("dat")then
%>
<tr>
<td colspan=4 height=20  bgcolor=LimeGreen></td>

<%
da=rs("dat")

end if%>
<tr>
<td style="text-align:center"><%=rs("ip")%></td>
<td style="text-align:center"><%=rs("visits")%></td>
<td style="text-align:center"><%=rs("clickc")%></td>
<td style="text-align:center"><%=rs("dat")%></td>


<%rs.MoveNext 
loop
%>
</table>
</table>
<table>
<tr>
<td>Total Users</td><td><%=cou%></td>
<tr>
<td>Total Visits</td><td><%=Total_visits%></td>
<tr>
<td>Total Click</td><td><%=Total_click%></td>
<tr>
<td>Average clicks per user</td><td><%=Total_click/Total_visits%></td>

</table>
</div>
<table>

<%
rs.Close

k=0
i=-4
do while k<5

sql="SELECT SUM(visits) as Total_visits FROM cc WHERE visits>0 and  dat=#"&date()+i&"#"
rs.Open sql,conn
Total_visits=rs("Total_visits")

if rs.EOF  then Total_visits=0 end if
rs.Close 

sql="SELECT SUM(clickc) as Total_click FROM cc WHERE clickc>0and  dat=#"&date()+i&"#"
rs.Open sql,conn
Total_click=rs("Total_click")
rs.Close 

%>
<tr>
<td><%=date()+i%></td><td  width=150><div style="height:20;width:<%=Total_visits%>;background-color:red"></div></td ><td width=40 align=center><%=Total_visits%></td>
<tr>
<td></td><td width=150><div style="height:10;width:<%=Total_click%>;background-color:green"></div></td><td width=40 align=center><%=Total_click%></td>

<%
k=k+1
i=i+1
loop%>
</table>
<%
Set rs=nothing
conn.Close
set conn=nothing
%>
</center>
</BODY>
</HTML>