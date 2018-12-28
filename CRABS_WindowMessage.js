//=============================================================================
// CRABS_WindowMessage.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Fix dialogue box width.
 * @author Crabs
 *
 * @param Width
 * @desc Definição da largura.
 * @default 816
 *
 *
 * @help  
 * Altera configurações do tamanho da caixa de diálogo
 */
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.CRABS_WindowMessage = true;
　　var Crabs = Crabs || {}; 

  Crabs.parameters = PluginManager.parameters('CRABS_WindowMessage');
	Crabs.windowsMessage_Width = String(Crabs.parameters['Width'] || 816);

//=============================================================================
// ** Window Message
//=============================================================================	

var _crabs_windowMessage_width = Window_Message.prototype.windowWidth;
Window_Message.prototype.windowWidth = function() {
    return Crabs.windowsMessage_Width;
};