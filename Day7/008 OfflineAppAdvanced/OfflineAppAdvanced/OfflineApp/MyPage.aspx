<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MyPage.aspx.cs" Inherits="MyPage" %>

<!DOCTYPE html>

<html  manifest="MyCache.txt">
<head runat="server">
    <title></title>
    <link href="Styles/Style.css" rel="stylesheet" />
    <link href="Styles/Style2.css" rel="stylesheet" />
    <link href="OnlineStyles/Style3.css" rel="stylesheet" />
    <script>
        window.applicationCache.onupdateready = function (e) {
            applicationCache.swapCache();
            location.reload();
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">       
    <div class="Div1" id="MyDiv1">
        Hi, Execution count is 1
    </div>   
    <div class="Div2" id="MyDiv2">
        Hi, Execution count is 1
    </div>   
    <div class="Div3" id="MyDiv3">
        Hi, Execution count is 1
    </div>
    </form>
</body>
</html>
