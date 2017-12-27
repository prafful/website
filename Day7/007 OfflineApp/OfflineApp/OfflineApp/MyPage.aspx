<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MyPage.aspx.cs" Inherits="MyPage" %>

<!DOCTYPE html>

<html  manifest="MyCache.txt">
<head runat="server">
    <title></title>
    <link href="Styles/Style.css" rel="stylesheet" />
    <script>
        window.applicationCache.onupdateready = function (e) {
            applicationCache.swapCache();
            location.reload();
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">       
    <div class="DivStyle" id="MyDiv">
        Hi, Execution count is 23s
    </div>
    </form>
</body>
</html>
