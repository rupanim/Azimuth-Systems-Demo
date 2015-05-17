app.factory('AbbrvList', [
    function () {
        return function () {
            var abbrvList = ['DNS', 'FTP', 'IP', 'PPP', 'SMTP'];
            return abbrvList;
        }
    }
]);

app.factory('DefinitionList', [
    function () {
        return function () {
            var definitionList = ['Domain Name Server', 'File Transfer Protocol', 'Internet Protocol', 'PointtoPoint Protocol', 'Simple Mail Transfer Protocol'];
            return definitionList;
        }
    }
]);

app.factory('MatchFunc', [
    function () {
        return function (abbrv, defintion) {

            var matched = false;

            var matchList = [{ key: "DNS", value: "Domain Name Server" },
                { key: "FTP", value: "File Transfer Protocol" },
                { key: "IP", value: "Internet Protocol" },
                { key: "PPP", value: "PointtoPoint Protocol" },
                { key: "SMTP", value: "Simple Mail Transfer Protocol" } ];

            for (var index = 0;index < matchList.length; ++index)
            {
                if (matchList[index].key == abbrv) {
                    if (matchList[index].value == defintion) {
                        matched = true;
                        break;
                    }
                }
           }
            return matched;
        }
    }
]);

