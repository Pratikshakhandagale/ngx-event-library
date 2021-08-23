import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ImageSearchService } from '../../services/image-search/image-search.service';
import { SbToastService } from '../../services/iziToast/izitoast.service';
export declare class AssetBrowserComponent implements OnInit, OnDestroy {
    private imageSearchService;
    private sbToastService;
    showImagePicker: any;
    assetBrowserEmitter: EventEmitter<any>;
    modalDismissEmitter: EventEmitter<any>;
    showImageUploadModal: boolean;
    isClosable: boolean;
    myImages: any;
    appIcon: any;
    assetsCount: any;
    searchMyInput: string;
    searchAllInput: any;
    myAssets: any[];
    allImages: any[];
    query: string;
    formData: any;
    assestData: {};
    formConfig: any;
    assetName: any;
    showErrorMsg: boolean;
    assetConfig: any;
    errorMsg: string;
    imageUploadLoader: boolean;
    acceptImageType: any;
    initialFormConfig: any;
    imageFormValid: any;
    emptySearchMessage: any;
    constructor(imageSearchService: ImageSearchService, sbToastService: SbToastService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getMyImages(offset: any, query?: any, search?: any): void;
    getAllImages(offset: any, query?: any, search?: any): void;
    searchImages(event: any, type: any): void;
    addImageInEditor(imageUrl: any, imageId: any): void;
    dismissImagePicker(): void;
    lazyloadMyImages(): void;
    dismissImageUploadModal(): void;
    uploadImage(event: any): void;
    populateFormData(formData: any): void;
    generateAssetCreateRequest(fileName: any, fileType: any, mediaType: any): {
        name: any;
        mediaType: any;
        mimeType: any;
        createdBy: number;
        creator: string;
        channel: string;
    };
    resetFormData(): void;
    openImageUploadModal(): void;
    uploadAndUseImage(modal: any): void;
    onStatusChanges(event: any): void;
    valueChanges(event: any): void;
    dismissPops(modal: any): void;
}