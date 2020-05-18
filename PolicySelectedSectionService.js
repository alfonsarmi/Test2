var PolicySelectedSectionService = (function () {
    function PolicySelectedSectionService() {
    }
    PolicySelectedSectionService.prototype.select = function (selectedKey) {
        if (!selectedKey)
            return this.selectedKey;
        if (this.selectedKey === selectedKey) {
            this.selectedKey = null;
        }
        else {
            this.selectedKey = selectedKey;
        }
        return this.selectedKey;
    };
    PolicySelectedSectionService.prototype.isSelected = function (key) {
        if (!this.selectedKey)
            return false;
        return this.selectedKey.policyId === key.policyId && this.selectedKey.sectionCode === key.sectionCode;
    };
    return PolicySelectedSectionService;
})();

var test = 1;
angular.module('app').service('policySelectedSectionService', PolicySelectedSectionService);

//hola que ase
//# sourceMappingURL=PolicySelectedSectionService.js.map