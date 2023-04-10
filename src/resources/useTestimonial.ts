import {
  fetch,
  get,
  create,
  update,
  trash,
  bulkTrash,
  remove,
  options,
  headCells,
  dataCells,
} from "@/services/testimonial";

export interface ITestimonialApi {
  testimonialsFetch: typeof fetch;
  testimonialsGet: typeof get;
  testimonialsCreate: typeof create;
  testimonialsUpdate: typeof update;
  testimonialsTrash: typeof trash;
  testimonialsBulkTrash: typeof bulkTrash;
  testimonialsRemove: typeof remove;
  testimonialsOptions: typeof options;
  testimonialsHeadCells: typeof headCells;
  testimonialsDataCells: typeof dataCells;
}

const useResource = () => {
  const api: ITestimonialApi = {
    testimonialsFetch: fetch,
    testimonialsGet: get,
    testimonialsCreate: create,
    testimonialsUpdate: update,
    testimonialsTrash: trash,
    testimonialsBulkTrash: bulkTrash,
    testimonialsRemove: remove,
    testimonialsOptions: options,
    testimonialsHeadCells: headCells,
    testimonialsDataCells: dataCells,
  };

  return api;
};

export default useResource;
