export const getContentfulEntryItem = (object) => {
    let entryFieldData = {}
    object.items.map(itemData => {
        entryFieldData = itemData.fields;
    })
    return entryFieldData;
};

export const getSectionsFromPageData = (object) => {
  return object.sections || object.content;
}

export const getArticlesThumbnailForAPage = (object) => {
  return object.article;
}
export const getIndivisualSectionData = (object,sectionID) => {
    let singleSectionData = {};
    if(object && object.sections){
      object.sections.map(item => {
        if(item.sys.contentType.sys.id == sectionID){
            singleSectionData =  item;
        }
      });
    }
    if(object && object.content){
      object.content.map(item => {
        if(item.sys.contentType.sys.id == sectionID){
            singleSectionData =  item;
        }
      });
    }
    
    return singleSectionData;
};

export const getPageSectionWiseData = (object,sectionID) => {
    let getSection = getContentfulEntryItem(object);
    let sectionData = getIndivisualSectionData(getSection,sectionID);
    return sectionData;
};

const getSectionDataByKey = (sectionDataArray, sectionId) => {

    console.log(Object.entries(sectionDataArray.fields))
    for (const [key, value] of Object.entries(sectionDataArray.fields)) {
      if (key === sectionId) {
        return value;
      }
    }
  };

export const getContentsBySectionKey = (ContentfulItems, sectionKey) => {
    if (ContentfulItems && ContentfulItems.items) {
      const sectionId = sectionKey.sectionId;
      let SectionData;
      (ContentfulItems.items).forEach(sectionDataArray => {
        SectionData =  getSectionDataByKey(sectionDataArray, sectionId);
      });
      return SectionData
    }
  };