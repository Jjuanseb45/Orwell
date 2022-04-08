const IDB = indexedDB
const SecondDb = indexedDB

function GenericInsertUpdateData(key, dbName, objectStoreName, objectToSave, dotnetHelper) {
    if (IDB) {
        let DB
        const request = IDB.open("DbTraffickTicket", 1)

        request.onsuccess = () => {
            DB = request.result
            console.log("DbSeteado")
            updateTrafficTicket()
        }

        request.onupgradeneeded = (e) => {
            DB = e.target.result
            console.log("DbSeteado")
            const objectStore = DB.createObjectStore("DbTraffickTicketDownloaded")
            updateTrafficTicket()
        }

        request.onerror = (error) => {
            console.log("No se ha creado", request.errorCode)
        }

        function updateTrafficTicket() {
            dotnetHelper.invokeMethodAsync("SaveTrafficTicketsDownloaded")
                .then(downloaded => {
                    const transaction = DB.transaction(["DbTraffickTicketDownloaded"], 'readwrite')
                    const objectStore = transaction.objectStore("DbTraffickTicketDownloaded")
                    try {
                        for (var i = 0; i < downloaded.length; i++) {
                            const addRequest = objectStore.put(downloaded[i], "TrafficTicketNumber" + i.toString())
                        }
                    } catch {
                        alert("No se guardó")
                    }
                });
        }
    }
}

function BringTrafficTicketsSaved() {
    return new Promise(function (resolve, reject) {
        var openDb = IDB.open("DbTraffickTicket", 1);

        openDb.onupgradeneeded = (e) => {
            let openedDb = e.target.result
            const objectStore = openedDb.createObjectStore("DbTraffickTicketDownloaded")
        }

        openDb.onsuccess = function () {
            var openedDb = openDb.result;
            var transaction = openedDb.transaction("DbTraffickTicketDownloaded", 'readwrite');
            var store = transaction.objectStore("DbTraffickTicketDownloaded");
            var request = store.getAll();
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };

            request.onerror = function (event) { reject(event) }

            transaction.oncomplete = function () {
                openedDb.close();
            };

            transaction.onerror = function (event) { reject(event) }
        };
        openDb.onerror = function (event) { reject(event) }
    })
}

async function doStuff() {
    var trafficTickets = await BringTrafficTicketsSaved()
    return trafficTickets
}

function InsertOrUpdateDataForm(key, currentTab, dotnetHelper) {
    if (IDB) {
        let DB
        const request = IDB.open("TraffickTicketFields", 1)

        request.onsuccess = () => {
            DB = request.result
            console.log("DbSeteado")
            update();
        }

        request.onupgradeneeded = (e) => {
            DB = e.target.result
            console.log("DbSeteado")
            const objectStore = DB.createObjectStore("TrafficTiketCreated")
            update();
        }

        request.onerror = (error) => {
            console.log("No se ha creado", error)
        }

        function update() {
            console.log("llamada")
            switch (currentTab) {
                case "Ubication":
                    dotnetHelper.invokeMethodAsync("SaveUbicationTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "Infraction":
                    dotnetHelper.invokeMethodAsync("SaveInfractionTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "Infractor":
                    dotnetHelper.invokeMethodAsync("SaveInfractorTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "Inmobilization":
                    dotnetHelper.invokeMethodAsync("SaveInmobilizationTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "Enterprise":
                    dotnetHelper.invokeMethodAsync("SaveEmpresaTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "License":
                    dotnetHelper.invokeMethodAsync("SaveLicenseTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "Owner":
                    dotnetHelper.invokeMethodAsync("SaveOwnerTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "Vehicle":
                    dotnetHelper.invokeMethodAsync("SaveVehicleTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
                case "Witness":
                    dotnetHelper.invokeMethodAsync("SaveWitnessTab")
                        .then(tabForm => {
                            const transaction = DB.transaction(["TrafficTiketCreated"], 'readwrite')
                            const objectStore = transaction.objectStore("TrafficTiketCreated")
                            try {
                                const addRequest = objectStore.put(tabForm, key)
                            } catch {
                                dotnetHelper.invokeMethodAsync("ShowSaveDataFailes", currentTab);
                            }
                        });
                    break;
            }
        }
    }
}


function SetDataSavedInFieldsForm(key, currentTab, dotnetHelper) {

    if (IDB) {
        let DB
        const request = IDB.open("TraffickTicketFields", 1)

        request.onsuccess = () => {
            DB = request.result
            SetDataInFields();
        }

        request.onupgradeneeded = (e) => {
            DB = e.target.result
            const objectStore = DB.createObjectStore("TrafficTiketCreated")
            SetDataInFields();
        }

        request.onerror = (error) => {
            console.log("No se ha creado", error)
        }

        function SetDataInFields() {
            DB.transaction(["TrafficTiketCreated"], 'readwrite').objectStore("TrafficTiketCreated").get(key).onsuccess = function (value) {
                switch (currentTab) {
                    case "Ubication":
                        dotnetHelper.invokeMethodAsync("SetUbicationFields", value.srcElement.result);
                        break;
                    case "Infractor":
                        dotnetHelper.invokeMethodAsync("ShowSetInfractorTabConfirmation", value.srcElement.result);
                        break;
                    case "License":
                        dotnetHelper.invokeMethodAsync("ShowSetLicenseTabConfirmation", value.srcElement.result);
                        break;
                    case "Owner":
                        dotnetHelper.invokeMethodAsync("ShowSetOwnerTabConfirmation", value.srcElement.result);
                        break;
                    case "Witness":
                        dotnetHelper.invokeMethodAsync("ShowSetWitnessTabConfirmation", value.srcElement.result);
                        break;
                    case "Infraction":
                        dotnetHelper.invokeMethodAsync("ShowSetInfractionTabConfirmation", value.srcElement.result);
                        break;
                    case "Inmobilization":
                        dotnetHelper.invokeMethodAsync("ShowSetInmobilizationTabConfirmation", value.srcElement.result);
                        break;
                    case "Vehicle":
                        dotnetHelper.invokeMethodAsync("ShowSetVehicleTabConfirmation", value.srcElement.result);
                        break;
                    case "Enterprise":
                        dotnetHelper.invokeMethodAsync("ShowSetEnterpriseTabConfirmation", value.srcElement.result);
                        break;
                }
            }
        }
    }
}

function BringTrafficTicketFormFieldsSaved() {
    return new Promise(function (resolve, reject) {
        var openDb = IDB.open("TraffickTicketFields", 1);

        openDb.onupgradeneeded = (e) => {
            let openedDb = e.target.result
            const objectStore = openedDb.createObjectStore("TrafficTiketCreated")
        }

        openDb.onsuccess = function () {
            var openedDb = openDb.result;
            var transaction = openedDb.transaction("TrafficTiketCreated", 'readwrite');
            var store = transaction.objectStore("TrafficTiketCreated");
            var request = store.getAll();
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };

            request.onerror = function (event) { reject(event) }

            transaction.oncomplete = function () {
                openedDb.close();
            };

            transaction.onerror = function (event) { reject(event) }
        };
        openDb.onerror = function (event) { reject(event) }
    })
}

async function BringSavedFields() {
    var SavedFields = await BringTrafficTicketFormFieldsSaved()
    return SavedFields.length !== 0;
}

async function SetAllSavedFields(dotnetHelper) {

    dotnetHelper.invokeMethodAsync("ShowSettingValuesModal");

    var SavedFields = await BringTrafficTicketFormFieldsSaved()

    for (var i = 0; i < SavedFields.length; i++) {        
        switch (SavedFields[i][SavedFields[i].length - 1]) {
            case "Ubication":
                console.log("Entro a Ubicacion")
                dotnetHelper.invokeMethodAsync("SetUbicationFields", SavedFields[i]);
                break;
            case "Infractor":
                dotnetHelper.invokeMethodAsync("ShowSetInfractorTabConfirmation", SavedFields[i]);
                break;
            case "License":
                dotnetHelper.invokeMethodAsync("ShowSetLicenseTabConfirmation", SavedFields[i]);
                break;
            case "Owner":
                dotnetHelper.invokeMethodAsync("ShowSetOwnerTabConfirmation", SavedFields[i]);
                break;
            case "Witness":
                dotnetHelper.invokeMethodAsync("ShowSetWitnessTabConfirmation", value.srcElement.result);
                break;
            case "Infraction":
                console.log("Entro a Infraccion")
                dotnetHelper.invokeMethodAsync("ShowSetInfractionTabConfirmation", SavedFields[i]);
                break;
            case "Inmobilization":
                dotnetHelper.invokeMethodAsync("ShowSetInmobilizationTabConfirmation", SavedFields[i]);
                break;
            case "Vehicle":
                dotnetHelper.invokeMethodAsync("ShowSetVehicleTabConfirmation", SavedFields[i]);
                break;
            case "Enterprise":
                dotnetHelper.invokeMethodAsync("ShowSetEnterpriseTabConfirmation", SavedFields[i]);
                break;
        }        
    }

    dotnetHelper.invokeMethodAsync("HideSettingValuesModal");
}