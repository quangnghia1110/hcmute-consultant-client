import http from "@/utils/http";

export const exportData = async (params: any) => {
  try {
    const response = await http.post<Blob>('export', null, {
      params,
      responseType: 'blob', 
    });

    const blob = new Blob([response.data], { type: response.headers['content-type'] });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    const extension = params.exportType === 'pdf' ? 'pdf' : 'xlsx';
    link.download = `${params.dataType}_export.${extension}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Export failed", error);
  }
};
