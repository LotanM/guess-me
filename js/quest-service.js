var gQuestsTree;
const KEY = 'quests';
var gCurrQuest;
var gPrevQuest = null;


function createQuestsTree() {
    var questsTree = loadFromStorage(KEY);
    if (!questsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
    }
    gCurrQuest = questsTree;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    console.log('res', res);
    gPrevQuest = gCurrQuest; // save currQuest
    gCurrQuest = gCurrQuest[res]; // move to next quest
    console.log('prevQuest', gPrevQuest);
    console.log('currQuest', gCurrQuest);
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    var lastQuest = gCurrQuest;
    gCurrQuest = createQuest(newQuestTxt);
    gCurrQuest.yes = createQuest(newGuessTxt);
    gCurrQuest.no = lastQuest;
    gPrevQuest[lastRes] = gCurrQuest;
    _saveQuestsToStorage();
}

function getCurrQuest() {
    return gCurrQuest
}


function _saveQuestsToStorage() {
    saveToStorage(KEY, gQuestsTree)
}

